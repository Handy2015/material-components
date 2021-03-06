import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdBadge,
        mdNavbar,
        mdNavItem,
        mdIcon
    },
    template: require('./navbars.html')
})
export default class IconLinksNavbar {
    data() {
        return {
        }
    }
}