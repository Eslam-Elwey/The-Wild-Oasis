import supabase from "./supabase";

export async function getCabins(params) {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return data;
}

export const deleteCabin = async (id) => {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(`cabin${id} couldn't be deleted`);
  }
  return data;
};
