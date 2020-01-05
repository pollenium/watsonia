import { Bytes32, Address } from 'pollenium-buttercup'
import { fetchFileText } from '../utils'
import { Keypair } from 'pollenium-ilex'
import keythereum from 'keythereum'
import FileSaver from 'file-saver'

interface KeystorePojo {
  nickname?: string,
  address: string
}

export class Keystore {

  public nickname?: string
  public address: Address

  constructor(private keystorePojo: KeystorePojo) {
    this.nickname = keystorePojo.nickname ? keystorePojo.nickname : null
    this.address = Address.fromHexish(keystorePojo.address)
  }

  getName(): string {
    return this.nickname ?
      `${this.nickname} - ${this.address.getPhex()}`
      : this.address.getPhex()
  }

  getFileName(): string {
    if (this.nickname) {
      return `Watsonia Login File - ${this.nickname}.txt`
    }
    else {
      return 'Watsonia Login File'
    }
  }

  getBlob(): Blob {
    return new Blob(
      [JSON.stringify(this.keystorePojo, null, 2)],
      { type: "text/plain;charset=utf-8"}
    )
  }

  download() {
    FileSaver.saveAs(this.getBlob(), this.getFileName())
  }

  async fetchKeypair(password: string): Promise<Keypair> {
    const privateKeyUint8Array: Uint8Array = await new Promise((resolve) => {
      keythereum.recover(password, this.keystorePojo, resolve)
    })
    return new Keypair(new Bytes32(privateKeyUint8Array))
  }

  static async fromFile(file: File): Promise<Keystore> {

    const keystoreJson = await fetchFileText(file)
    const keystorePojo = JSON.parse(keystoreJson)

    return new Keystore(keystorePojo)

  }

  static async generate(struct: {
    nickname?: string,
    password: string
  }) {

    const dk: { privateKey: string, salt: string, iv: number } = await new Promise((resolve) => {
      keythereum.create(null, resolve)
    })

    const keystorePojo: KeystorePojo = await new Promise((resolve) => {
      keythereum.dump(
        struct.password,
        dk.privateKey,
        dk.salt,
        dk.iv,
        null,
        resolve
      )
    })

    if(struct.nickname) {
      keystorePojo.nickname = struct.nickname
    }

    return new Keystore(keystorePojo)
  }
}
