def remote = [:]
remote.name = 'test'
remote.host = '172.18.67.7'
remote.user = 'root'
remote.password = 'cmcc&4321'
remote.allowAnyHosts = true
def project_dir
pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                switch (BRANCH_NAME) {
                    case 'master':
                        project_dir = 'master_dir'
                        break;
                    case 'dev':
                        project_dir = 'dev_dir'
                        break;
                }
                print project_dir

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
