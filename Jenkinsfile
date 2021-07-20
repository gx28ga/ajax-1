def remote = [:]
remote.name = 'test'
remote.host = '172.18.67.7'
remote.user = 'root'
remote.password = 'cmcc&4321'
remote.allowAnyHosts = true
def project_dir = match (BRANCH_NAME) {
    when "master", "main_dir"
    when "dev", "dev_dir"
}
print project_dir
pipeline {
    agent any

    stages {
        stage('install') {
            steps {


                sh 'yarn'
                echo "$WORKSPACE"
            }
        }
        stage('build') {
            steps {
                echo "Building $BRANCH_NAME"

            }
        }
        stage('deploy') {
            steps {
                writeFile file: 'abc.sh', text: 'ls'
                sshRemove remote: remote, path: "/data/web/abc.sh"
                sshPut remote: remote, from: 'abc.sh', into: '/data/web'
            }
        }
    }
}
