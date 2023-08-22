/**
 * flower-icons
 */
import flowerIcons from "./component/flower-icons/flower-icons";
/**
 * flower-empty
 */
import flowerEmpty from "./component/flower-empty/flower-empty";
/**
 * flower-compound
 */
import layoutSource from "./component/flower-compound/ui-layout-source";
import uiNoNetwork from "./component/flower-compound/ui-no-network";
import uiEmptyStatus from "./component/flower-compound/ui-empty-status";
/**
 * flower-ui
 */
import uiLayout from "./component/flower-ui/ui-layout";
import uiLoadMore from "./component/flower-ui/ui-load-more";
import uiSpinner from "./component/flower-ui/ui-spinner";
import uiText from "./component/flower-ui/ui-text";
import uiSpan from "./component/flower-ui/ui-span";
import uiButton from "./component/flower-ui/ui-button";
const props = {
	// flower-compound
	"ui-layout-source": layoutSource,
	"ui-no-network": uiNoNetwork,
	"ui-empty-status": uiEmptyStatus,
	// flower-ui
	"ui-layout": uiLayout,
	"ui-load-more": uiLoadMore,
	"ui-spinner": uiSpinner,
	"ui-text": uiText,
	"ui-span": uiSpan,
	"ui-button": uiButton,
	// flower-icons
	"flower-icons": flowerIcons,
	// flower-empty
	"flower-empty": flowerEmpty,
}

export default props;