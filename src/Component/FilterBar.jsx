import React from 'react'

export default function FilterBar({Filter}) {
  return (
    <>
    <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => Filter("All")} defaultChecked />
                            <label className="form-check-label" for="flexRadioDefault1">
                                <h4>All</h4>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => Filter("done")} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                <h4>Completed</h4>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => Filter("pending")} />
                            <label className="form-check-label" for="flexRadioDefault3">
                                <h4>Incompleted</h4>
                            </label>
                        </div>
                    </div>
    </>
  )
}
