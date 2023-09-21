pipeline {
    agent  any
    stages {
        stage('test') {
            steps {
                sh 'npm run lint'
                sh 'npm audit --audit-level=high'
                echo  'test done'
            }
        }
        stage('build') {
            steps {
                sh 'docker build -t hampushampus/cicd .'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker push hampushampus/cicd'
            }
        }
    }
}