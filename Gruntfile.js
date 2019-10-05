const creds = require('./.creds.json');

module.exports = (grunt) => {
  grunt.initConfig({
    s3: {
      options: {
        accessKeyId: creds.S3_ACCESS_KEY_ID,
        secretAccessKey: creds.S3_SECRET_ACCESS_KEY,
        access: 'public-read',
        bucket: creds.BUCKET,
        overwrite: true
      },
      build: {
        cwd: "build/",
        src: "**"
      }
    },
    cloudfront: {
      options: {
        accessKeyId: creds.S3_ACCESS_KEY_ID,
        secretAccessKey: creds.S3_SECRET_ACCESS_KEY,
        distributionId: creds.DISTRIBUTION_ID,
      },
      html: { options: { invalidations: ['/'] } }
    }
  });
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('deploy', ['S3 > CDN'], () => {
    grunt.task.run(['s3', 'cloudfront']);
  });
};
