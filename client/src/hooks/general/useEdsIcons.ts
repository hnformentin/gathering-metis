import { folder, group, person, search, star_outlined, widgets } from '@equinor/eds-icons';

import { Icon } from '@equinor/eds-core-react';

const useEdsIcons = (): void => {
    Icon.add({ search, folder, group, person, star_outlined, widgets });
};

export default useEdsIcons;
