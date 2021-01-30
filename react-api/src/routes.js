import RefDemo from './demos/ref';
import ForwardRefDemo from './demos/forward-ref';
import ContextDemo from './demos/context';
import ConcurrentModeDemo from './demos/concurrent-mode';
import SuspenseDemo from './demos/suspense';
import HooksDemo from './demos/hooks';
import ChildrenDemo from './demos/children';

const routes = [
	{
		path: '/ref',
		component: RefDemo,
		title: 'RefDemo'
	},
	{
		path: '/forward-ref',
		component: ForwardRefDemo,
		title: 'ForwardRefDemo'
	},
	{
		path: '/context',
		component: ContextDemo,
		title: 'ContextDemo'
	},
	{
		path: '/concurrent',
		component: ConcurrentModeDemo,
		title: 'ConcurrentModeDemo'
	},
	{
		path: '/suspense',
		component: SuspenseDemo,
		title: 'SuspenseDemo'
	},
	{
		path: '/hooks',
		component: HooksDemo,
		title: 'HooksDemo'
	},
	{
		path: '/children',
		component: ChildrenDemo,
		title: 'ChildrenDemo'
	}
];
export default routes;
