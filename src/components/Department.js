import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { departmentActions } from "../store/department";
const Department = () => {
  const dispatch = useDispatch();
  const department = useSelector((state) => state.department.department);

  const handleAddClick = () => {
    dispatch(departmentActions.adddepartment());
  };

  const handleRemoveClick = (index) => {
    dispatch(departmentActions.removedepartment(index));
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    const name = e.target.name;

    let obj = {
      value: value,
      name: name,
      index: index,
    };
    dispatch(departmentActions.handleChange(obj));
  };
  return (
    <div>
      <h2 className="text-center"> Enter Department Details</h2>
      {department.map((x, i) => {
        return (
          <div className="content" key={i}>
            <form>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-sm-1" />
                <div className="col-sm-10">
                  <div className="container">
                    <div className="row">
                      <div className="form-row">
                        <div className="col-md-4">
                          <label>Department Name</label>
                          <input
                            type="text"
                            className="form-control required"
                            placeholder="Enter Department Name"
                            name="departmentname"
                            value={x.departmentname}
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
};

export default Department;
