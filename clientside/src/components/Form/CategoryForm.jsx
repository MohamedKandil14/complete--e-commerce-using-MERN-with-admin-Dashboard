import React from 'react'

const CategoryForm=({handleSubmit,value,setValue})=> {
  return (
    <>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder="Enter the Name of New Category"  value={value} onChange={(e)=>setValue(e.target.value)}/>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-primary ">Submit</button>

  </div>
 
</form>
    </>
  )
}
export default CategoryForm