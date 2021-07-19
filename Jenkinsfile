pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building $BRANCH_NAME"
                echo "$WORKSPACE"
                sh 'pwd'
                sh 'cat package.json'
            }
        }
        stage('Test') {
            steps {
                echo "Testing $BRANCH_NAME"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying $BRANCH_NAME"
            }
        }
    }
}
