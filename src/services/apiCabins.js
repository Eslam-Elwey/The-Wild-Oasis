import supabase, { supabaseUrl } from "./supabase";

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

export const createEditCabin = async (newCabin, id = null) => {
  // https://vyremsufuyapgntqfebf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl) ;
  
  const imageName = `${Date.now()}-${newCabin.image?.name}`;
  const imagePath = hasImagePath?newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query =  supabase.from("cabins");

  //a- create cabin
  if (!id) {
     query = query
      .insert([{ ...newCabin, image: imagePath }])
  }

  // b- edit cabin
  else {
    query = query.update({ ...newCabin, image: imagePath })
    .eq('id', id)
    .select()

  }

  const { data, error } = await query.select().single() ;

  if(error)
  {
    console.error("error in creating or editing cabin");
    throw new Error(
      "Cabin couldn't be created or edited successfully",
    );
  }

  // upload iamge
  if(hasImagePath) return data ; //already uploaded

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete cabin if image not uploaded correctly
  if (storageError) {
    const { data } = await supabase.from("cabins").delete().eq(data.id);
    console.error("storage error");
    throw new Error(
      "Cabin image couldn't be uploaded and no cabin has been created",
    );
  }
return data ;
  
}
