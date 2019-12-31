const httpServerLib = require('http-server')

module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    watch: {
      files: [
        'Gruntfile.js',
        'package.json',
        'tsconfig.json',
        'ts/**/*.ts',
      ],
      tasks: ['build'],
      options: {
        spawn: false,
        interrupt: true
      }
    },
    clean: ['node', 'browser'],
    mkdir: {
      node: {
        options: {
          create: ['node']
        },
      },
      browser: {
        options: {
          create: ['browser']
        },
      },
    },
    ts: {
      default : {
        tsconfig: './tsconfig.json',
        // options: {
        //   fast: 'never'
        // }
      }
    },
    run: {
      browserify: {
        cmd: 'npm',
        args: ['run', 'browserify']
      },
      tsc: {
        cmd: 'npm',
        args: ['run', 'tsc']
      }
    }
  })

  grunt.loadNpmTasks(
    'grunt-contrib-watch',
    'grunt-contrib-clean',
    'grunt-mkdir',
    'grunt-ts',
    'grunt-run',
    'grunt-force-task'
  )

  grunt.registerTask('default', ['build', 'watch'])

  grunt.registerTask('build', [
    // 'clean',
    'mkdir',
    'run:tsc',
    'run:browserify',
  ])

}
