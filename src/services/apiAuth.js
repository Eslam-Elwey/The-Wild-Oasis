import supabase, { supabaseUrl } from "./supabase";

export const login = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
};

export const logout = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const signUp = async ({ fullName, email, password }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avater: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
};

export const updateCurrentUser = async ({ fullName, avater, password }) => {
  //update password or fullName
  console.log("entered");

  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  if (!avater) return data;
  //upload avater image
  const fileName = `avater-${data.user.id}-${Date.now()}`;

  const { error: storageError } = await supabase.storage
    .from("avaters")
    .upload(fileName, avater);

  if (storageError) throw new Error(storageError.message);

  //update avater in user
  updateData = {
    data: {
      avater: `${supabaseUrl}/storage/v1/object/public/avaters/${fileName}`,
    },
  };

  const { data: updatedUser, error: err } =
    await supabase.auth.updateUser(updateData);

  if (err) throw new Error(err.message);
  return updatedUser;
};
