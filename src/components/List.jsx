import Video from "./Video";
import Article from "./Article";
import withHighlight from "./withHighlight";

const VideoComponent = withHighlight(Video)
const ArticleComponent = withHighlight(Article)

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoComponent {...item} />
                );

            case 'article':
                return (
                    <ArticleComponent {...item} />
                );
        }
    });
};