def remote = [:]
remote.name = 'test'
remote.host = '172.18.67.7'
remote.user = 'root'
remote.password = 'cmcc&4321'
remote.allowAnyHosts = true
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
                writeFile file: 'abc.sh', text: 'ls -lrt'
                sshPut remote: remote, from: 'abc.sh', into: '/data/web'
            }
        }
    }
}
