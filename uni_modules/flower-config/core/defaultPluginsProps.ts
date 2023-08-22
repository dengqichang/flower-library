/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 组件属性
 */
import { defaultPlugins } from "./mergeConfiguration";

/**
 * flower-ui
 */
const uiLayoutProps = defaultPlugins['ui-layout'];
const uiLoadMoreProps = defaultPlugins['ui-load-more'];
const uiSpinnerProps = defaultPlugins['ui-spinner'];
const uiTextProps = defaultPlugins['ui-text'];
const uiSpanProps = defaultPlugins['ui-span'];
const uiButtonProps = defaultPlugins['ui-button'];

/**
 * flower-compound
 */
const uiLayoutSourceProps = defaultPlugins['ui-layout-source'];
const uiNoNetworkProps = defaultPlugins['ui-no-network'];
const uiEmptyStatusProps = defaultPlugins['ui-empty-status'];
/**
 * flower-empty
 */
const uiEmptyProps = defaultPlugins['flower-empty'];
/**
 * flower-icons
 */
const uiIconsProps = defaultPlugins['flower-icons'];

export {
	// flower-compound
	uiLayoutSourceProps,
	uiNoNetworkProps,
	uiEmptyStatusProps,
	// flower-icons
	uiIconsProps,
	// flower-empty
	uiEmptyProps,
	// flower-ui
	uiLayoutProps,
	uiLoadMoreProps,
	uiSpinnerProps,
	uiTextProps,
	uiSpanProps,
	uiButtonProps
}