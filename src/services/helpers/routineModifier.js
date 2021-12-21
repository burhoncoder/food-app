export const routineModifier = (routine) => {
  let routesModification = [routine];
  routesModification.push(routine.replace("TRIGGER", "SUCCESS"));
  routesModification.push(routine.replace("TRIGGER", "FAILURE"));
  return routesModification;
};
