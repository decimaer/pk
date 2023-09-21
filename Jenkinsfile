pipeline {
    agent  any
    stages {
        stage('build') {
            steps {
                node {
                    checkout scm 
                }
                sh 'npm i'
                echo  'build done'
            }
        }
        stage('test') {
            steps {
                echo  'test done'
            }
        }
    }
}