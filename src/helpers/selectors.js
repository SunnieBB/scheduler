export function getAppointmentsForDay(state, day) {
  console.log("bope", day, state);


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

export function getInterviewersByDay(state, day) {
  const result = [];
  
  const interviewersArr = state.days.filter((d) => {
    return d.name === day;
  })

  if (interviewersArr[0] === undefined) {
    return result;
  }
  interviewersArr[0].interviewers.forEach((id) => {
    result.push(state.interviewers[id]);
  })
  return result;
}