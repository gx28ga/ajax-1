def remote = [:]
remote.name = 'test'
remote.host = '172.18.67.7'
remote.user = 'root'
remote.password = 'cmcc&4321'
remote.allowAnyHosts = true
def result
def version = "1.2"
switch(GIT_BRANCH) {
  case "develop":
    result = "dev"
    break
  case ["master", "support/${version}".toString()]:
    result = "list"
    break
  case "support/${version}":
    result = "sup"
    break
  default:
    result = "def"
    break
}
echo "${result}"
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
