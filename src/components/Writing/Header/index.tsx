import * as W from "./style";
import { CHANNAL_GROUP_ITEM, POST_GROUP_ITEM } from "./constant";
import { useCreatePost } from "../../../hooks/Writing/usePost";

const WritingHeader = () => {
  const {
    postSelected,
    categorySelected,
    handlePostClick,
    handleCategoryClick,
  } = useCreatePost();
  return (
    <W.WritingHeaderWraper>
      {POST_GROUP_ITEM.map((item, index) => (
        <W.WritingSortButton
          key={index}
          onClick={() => handlePostClick(index)}
          selected={postSelected === index}
        >
          {item.title}
        </W.WritingSortButton>
      ))}
      {CHANNAL_GROUP_ITEM.map((item, index) => (
        <W.WritingChannelButton
          key={index}
          onClick={() => handleCategoryClick(index)}
          selected={categorySelected === index}
        >
          <W.ButtonImg src={item.icon} />
        </W.WritingChannelButton>
      ))}
    </W.WritingHeaderWraper>
  );
};
export default WritingHeader;
