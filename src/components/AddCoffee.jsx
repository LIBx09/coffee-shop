import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-bold">Add New Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className=" md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="taste"
                placeholder="Enter Coffee taste"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="supplier"
                placeholder="Enter Coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className=" md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className="form-control mb-7">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <div className="join">
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
