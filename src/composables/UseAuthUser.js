// import { ref } from "vue";
import useSupabase from "@/composables/UseSupabase";
const { supabase } = useSupabase();

export default function useAuthUser() {
  const register = async (form) => {
    const { user, error } = await supabase.auth.signUp(
      { email: form.email, password: form.password },
      {
        data: { firstName: form.firstName, lastName: form.lastName },
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
      }
    );
    return { user, error };
  };

  return {
    register,
  };
}
