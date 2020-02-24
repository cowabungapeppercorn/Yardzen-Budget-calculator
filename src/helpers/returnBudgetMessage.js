export default (amount, low, high) => {
  if (amount >= high) {
    return ["You are under budget at the highest estimated costs.", "success"]
  } else if (amount <= low) {
    return ["You are over budget at the lowest estimated costs.", "danger"]
  } else {
    return ["You are within the estimated budget.", "success"]
  }
};