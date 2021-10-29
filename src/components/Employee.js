import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { departmentActions } from "../store/department";
function Employee() {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.department.employee);
  const department = useSelector((state) => state.department.department);

  //   console.log("employee", employee);
  //   console.log("department", department);

  const handleAddClick = () => {
    dispatch(departmentActions.addemployee());
  };

  const handleRemoveClick = (index) => {
    dispatch(departmentActions.removeemployee(index));
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    const name = e.target.name;

    let obj = {
      value: value,
      name: name,
      index: index,
    };
    dispatch(departmentActions.handleEmpChange(obj));
  };
  return (
    <div>
      <h2 className="text-center"> Enter Employee Details</h2>
      {employee.map((x, i) => {
        return (
          <div className="content" key={i}>
            <form>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-sm-1" />
                <div className="col-sm-10">
                  <div className="container">
                    <div className="row">
                      <div className="form-row">
                        <div className="col">
                          <label>Select Department</label>
                          <select
                            onChange={(e) => handleInputChange(e, i)}
                            name="department"
                          >
                            <option>Select Department</option>
                            {department.map((item, index) => {
                              return (
                                <option value={item.departmentname} key={index}>
                                  {item.departmentname}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label>Employee Name</label>
                          <input
                            type="text"
                            className="form-control required"
                            placeholder="Enter Employee Name"
                            name="employeename"
                            value={x.employeename}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>

                        <div className="col p-4">
                          {i === 0 ? (
                            <button
                              onClick={(e) => handleAddClick(e, i)}
                              type="button"
                              className="btn btn-primary text-center"
                            >
                              Add
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger"
                              onClick={() => handleRemoveClick(i)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1" />
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Employee;
