import { createSlice } from "@reduxjs/toolkit";

const initialDeapartmentState = {
  department: [{ departmentname: "" }],
  employee: [
    {
      department: "",
      employeename: "",
    },
  ],
};

const departmentSlice = createSlice({
  name: "department",
  initialState: initialDeapartmentState,
  reducers: {
    adddepartment(state) {
      state.department.push({
        departmentname: "",
      });
    },
    removedepartment(state, action) {
      const index = action.payload;

      state.department.splice(index, 1);
    },
    handleChange(state, action) {
      const index = action.payload.index;

      const value = action.payload.value;

      const name = action.payload.name;

      //   console.log("rt", action);
      state.department[index][name] = value;
    },
    addemployee(state) {
      state.employee.push({
        department: "",
        employeename: "",
      });
    },
    removeemployee(state, action) {
      const index = action.payload;

      state.employee.splice(index, 1);
    },
    handleEmpChange(state, action) {
      const index = action.payload.index;

      const value = action.payload.value;

      const name = action.payload.name;

      //   console.log("rt", action);
      state.employee[index][name] = value;
    },
  },
});

export const departmentActions = departmentSlice.actions;

export default departmentSlice.reducer;
