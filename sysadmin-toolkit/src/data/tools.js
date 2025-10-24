
export const tools = [
  {
    id: 1,
    title: 'Log Anomaly Detector',
    description: 'Parses system logs to detect unusual patterns and potential errors using AI.',
    videoPlaceholder: 'Video demo for Log Anomaly Detector',
    code: `
# Python script using FastAPI
from fastapi import FastAPI

app = FastAPI()

@app.post("/scan-logs/")
dasync def scan_logs(logs: str):
    # AI magic happens here
    anomalies = find_anomalies(logs)
    return {"anomalies": anomalies}
`,
    language: 'python'
  },
  {
    id: 2,
    title: 'Ansible Playbook Generator',
    description: 'Generates Ansible playbooks from natural language commands.',
    videoPlaceholder: 'Video demo for Ansible Playbook Generator',
    code: `
# Ansible YAML playbook
- name: Deploy Web Server
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt: name=nginx state=latest
`,
    language: 'yaml'
  },
  {
    id: 3,
    title: 'Smart Backup Scheduler',
    description: 'Schedules system backups based on usage patterns and file changes.',
    videoPlaceholder: 'Video demo for Smart Backup Scheduler',
    code: `
# Bash script for smart backups
#!/bin/bash

LAST_MODIFIED=$(find /srv/data -mmin -60)

if [ -n "$LAST_MODIFIED" ]; then
    echo "Recent changes detected. Starting backup..."
    # Backup logic here
fi
`,
    language: 'bash'
  },
];
