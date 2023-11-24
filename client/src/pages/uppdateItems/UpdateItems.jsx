import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const imageHostingKey = import.meta.env.VITE_imageHostingKey;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateItems = () => {
  const axiosPrivate = useAxiosPrivate();
  const axiosPublic = useAxiosPublic();
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosPrivate.get(`/menus/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [axiosPrivate, id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.image[0] };
    const imgRes = await axiosPublic.post(imageHostingAPI, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (imgRes?.data?.success) {
      const menuItemInfo = {
        name: data?.name,
        recipe: data?.recipe,
        image: imgRes?.data?.data?.display_url,
        category: data?.category,
        price: parseFloat(data?.price),
      };
      const res = await axiosPrivate.patch(`/menus/${"_id"}`, menuItemInfo);
      console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        reset();
        toast?.success(`${data?.name} is updated!`, {
          position: "top-right",
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>Update Items | Bistro Boss</title>
      </Helmet>
      <SectionTitle heading="UPDATE ITEM" subHeading="Make Update" />
      <Container>
        <div className="bg-gray-100 shadow-xl min-h-screen p-12 mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <div className="form-control flex-1">
              <label>Recipe Name</label>
              <input
                type="text"
                defaultValue={item?.name}
                {...register("name", {
                  required: true,
                })}
                placeholder="Recipe Name"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors?.name?.type === "required" && (
                <span className="text-red-500">Recipe name is required</span>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="form-control w-full md:flex-1">
                <label>Category</label>
                <select
                  {...register("category", {
                    required: true,
                  })}
                  defaultValue={item?.category}
                  className="outline-0 border p-2 rounded text-sm"
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
                {errors?.category?.type === "required" && (
                  <span className="text-red-500">Category is required</span>
                )}
              </div>
              <div className="form-control flex-1">
                <label>Price</label>
                <input
                  type="number"
                  defaultValue={item?.price}
                  {...register("price", {
                    required: true,
                  })}
                  placeholder="Price"
                  className="outline-0 border p-2 rounded text-sm"
                />
                {errors?.price?.type === "required" && (
                  <span className="text-red-500">Price is required</span>
                )}
              </div>
            </div>
            <div className="form-control flex-1">
              <label>Recipe Details</label>
              <textarea
                type="text"
                defaultValue={item?.recipe}
                {...register("recipe", { required: true })}
                className="outline-0 border p-2 rounded text-sm"
                placeholder="Recipe Details"
                cols="30"
                rows="10"
              />
              {errors?.details?.type === "required" && (
                <span className="text-red-500">Recipe details is required</span>
              )}
            </div>
            <div className="form-control space-y-1">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input w-full max-w-xs"
              />
              {errors?.image?.type === "required" && (
                <span className="text-red-500">Product image is required</span>
              )}
            </div>
            <div className="form-control flex items-center">
              <input
                type="submit"
                value="Update"
                className="bg-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white font-medium cursor-pointer"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateItems;
