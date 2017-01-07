import AvaApp from '../components/AvaApp';
import Account from '../components/Account';
import AccountContainer from '../components/AccountContainer';
import PresetContainer from '../components/PresetContainer';
import AllAd from '../components/AllAd';
import CreativePage from '../components/CreativePage';
import AdspotsByAdgroup from '../components/AdspotsByAdgroup';
import DeliveryContainer from '../components/DeliveryContainer';
import DeliveryAdSelect from '../components/DeliveryAdSelect';
import Delivery from '../components/Delivery';
import DeliveryPreset from '../components/DeliveryPreset';
import CreativeMetaPreset from '../components/CreativeMetaPreset';
import CreativeSchedulePreset from '../components/CreativeSchedulePreset';

export default [
	{
		path: '/',
		component: AvaApp,
		indexRoute: {
			component: Account ,
			category: 'account'
		},
		childRoutes: getRootChildRoutes()
	}
]

function getRootChildRoutes() {
	return [
	{
		path: 'agency/:agency_id/advertiser/:advertiser_id/',
		component: AccountContainer,
		childRoutes: [{
			path: 'ad',
			component: AllAd,
			category: 'account',
			subCategory: 'ad'
		}, {
			path: 'creative',
			component: CreativePage,
			category: 'account',
			subCategory: 'creative'
		}]
	}, {
		path: 'preset/',
		component: PresetContainer,
		childRoutes: [{
			path: 'delivery_filter',
			component: DeliveryPreset,
			category: 'preset',
			subCategory: 'delivery_filter'
		}, {
			path: 'creative_meta',
			component: CreativeMetaPreset,
			category: 'preset',
			subCategory: 'creative_meta'
		}, {
			path: 'creative_schedule',
			component: CreativeSchedulePreset,
			category: 'preset',
			subCategory: 'creative_schedule'
		}]
	}, {
		path: 'adgroup/:adgroup_id/delivery',
		component: Delivery
	}, {
		path: 'delivery/',
		component: DeliveryContainer,
		childRoutes: [{
			path: 'ad',
			category: 'delivery',
			component: DeliveryAdSelect,
			subCategory: 'ad_select'
		}]
	}
]}
