import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-bold">Update Coffee: {name} </h1>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={taste}
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
                defaultValue={supplier}
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
                defaultValue={category}
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
                defaultValue={details}
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
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
