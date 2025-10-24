export const runAiTool = (toolTitle) => {
  console.log(`Running AI tool: ${toolTitle}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      let response;
      switch (toolTitle) {
        case 'Log Anomaly Detector':
          response = 'AI Scan Complete: Found 2 critical anomalies in auth.log.';
          break;
        case 'Ansible Playbook Generator':
          response = 'AI Complete: Generated playbook for nginx deployment.';
          break;
        case 'Smart Backup Scheduler':
          response = 'AI Complete: Scheduled backup for tonight at 2 AM based on low usage.';
          break;
        default:
          response = 'AI Task completed successfully.';
      }
      resolve(response);
    }, 1500);
  });
};