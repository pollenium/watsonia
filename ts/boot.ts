export enum BootSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export enum BootColor {
  PRIMARY =   'primary',
  SECONDARY = 'secondary',
  SUCCESS =   'success',
  DANGER =    'danger',
  WARNING =   'warning',
  INFO =      'info',
  LIGHT =     'light',
  DARK =      'dark',
  MUTED =     'muted',
  WHITE =     'white'
}

export interface BootTheme {
  size: BootSize,
  color: BootColor
}
