import { useCallback } from "react";
import { useMutate } from "restful-react";

const useTalentInterest = () => {
  const { mutate: postData } = useMutate({ verb: 'POST', path: '/talentInterest' });

  const postAsyncData = useCallback(async (company, name, email) => {
    try {
      return await postData({ id: company?.id, email, name, company });
    } catch (e) {
      console.error(e);
    }
  },[postData]);

  return postAsyncData;
}

export default useTalentInterest;