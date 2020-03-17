/* tslint:disable */
export interface AdminJobScheduleObj {

  /**
   * A cron expression, a time-based job scheduler.
   */
  cron?: string;

  /**
   * The schedule type. The valid values are 'Hourly', 'Daily', 'Weekly', 'Custom', 'Manually' and 'None'.
   * 'Manually' means to trigger it right away and 'None' means to cancel the schedule.
   */
  type?: string;
}
