pipeline {
    agent  any
    stages {
        stage('build') {
            steps {
                sh 'npm i'
                echo  'build done'
            }
        }
        stage('test') {
            steps {
                sh 'npm run lint'
                sh 'npm audit --audit-level=high'
                echo  'test done'
            }
        }
    }
}