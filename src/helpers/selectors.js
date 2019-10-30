export function getAppointmentsForDay(state, day) {
  
  const daysArr = state.days.filter(days => days.name === day);
  
  let result = [];

  if (daysArr[0] === undefined) {
    return result;
  }
  daysArr[0].appointments.forEach((id) => {
    result.push(state.appointments[id.toString()]);
  });
  return result;
}

export function getInterview(state, interview) {
  
  if (interview === null) {
    return null;
  }
  
  const interviewDetails = {}
  interviewDetails.student = interview.student;
  interviewDetails.interviewer = state.interviewers[interview.interviewer];

  return interviewDetails;
}