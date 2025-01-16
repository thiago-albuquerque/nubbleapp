import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icons/Icon';

export function FlashOnIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.30694 2.09252L5.68283 9.70607L5.68226 9.71272C5.66819 9.86914 5.71363 10.0056 5.78274 10.0995C5.84945 10.1901 5.92556 10.2276 5.98951 10.2361C5.99793 10.2369 6.00303 10.2374 6.00697 10.2377C6.01113 10.2378 6.0166 10.2379 6.02594 10.2381L8.64902 10.2316C8.88071 10.231 9.10235 10.3261 9.26152 10.4945C9.42069 10.6629 9.50326 10.8895 9.48969 11.1208L9.18124 16.379C10.9888 13.3377 13.569 8.98007 13.8823 8.36403C13.8837 8.36132 13.8851 8.35862 13.8865 8.35593C14.0293 8.08251 13.9163 7.76835 13.7479 7.65971C13.6995 7.62856 13.6527 7.61677 13.6113 7.61677L10.8011 7.61674C10.5272 7.61674 10.2705 7.4832 10.1132 7.25892C9.956 7.03465 9.91799 6.7478 10.0114 6.49031L11.5266 2.31255C11.6151 2.00023 11.4383 1.75138 11.293 1.69592L11.2929 1.69585C11.2642 1.6849 11.2363 1.68005 11.2095 1.68005H6.64332C6.54305 1.68005 6.33586 1.78388 6.30694 2.09252ZM7.84603 18.6228L7.84609 18.6226L7.84603 18.6228ZM4.63341 1.94464C4.72599 0.915736 5.53235 0 6.64332 0H11.2095C11.4436 0 11.6746 0.0432064 11.8925 0.12647M11.8927 0.12654C12.9767 0.540699 13.4516 1.77539 13.1271 2.82449C13.1231 2.83732 13.1188 2.85004 13.1142 2.86266L11.9993 5.93671L13.6113 5.93672C13.9856 5.93672 14.3472 6.04709 14.6585 6.24787L14.6587 6.24795C15.6152 6.86506 15.8859 8.15188 15.3777 9.12969C14.9256 10.0149 10.6493 17.2002 9.28935 19.4826C8.70262 20.4674 7.29073 19.9226 7.35138 18.8837L7.76023 11.9138L6.02098 11.9182C6.01492 11.9182 6.00886 11.9181 6.00281 11.918L5.99671 11.9179C5.97377 11.9175 5.94405 11.9169 5.91334 11.9152C5.88266 11.9135 5.85307 11.9107 5.8302 11.9086L5.82412 11.908C5.81899 11.9076 5.81388 11.907 5.80876 11.9065C4.63123 11.7756 3.91212 10.6592 4.00864 9.56588L4.63284 1.9513L4.63341 1.94464"
        fill={color}
      />
    </Svg>
  );
}
