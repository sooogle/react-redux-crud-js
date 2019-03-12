export const addEmp = emp => ({
  type: "ADD_EMP",
  emp: emp
});

export const updateEmp = emp => ({
  type: "UPDATE_EMP",
  emp: emp
});

export const deleteEmp = id => ({
  type: "DELETE_EMP",
  id: id
});
