import { motion } from 'framer-motion';

export default function Doodle2() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -60 300 200">
            <motion.path
                fill="none"
                stroke="rgba(155, 155, 155, 0.6)"
                strokeWidth={5}
                strokeLinejoin="round"
                // strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: [1, 0.4, 0.7, 0.9] }}
                d="M 7.5,118 C 7.9,117.4 8.1,117.2 9.5, 115 C 10.9,112.8 12.100000000000001,111 14.5, 107 C 16.9,103 18.1,100.8 21.5, 95 C 24.9,89.2 28.1,83.6 31.5, 78 C 34.9,72.4 36.3,70.2 38.5, 67 C 40.7,63.8 41.7,63.2 42.5, 62 C 43.3,60.8 42.5,61 42.5, 61 C 42.5,61 42.5,61.4 42.5, 62 C 42.5,62.6 43.3,60.8 42.5, 64 C 41.7,67.2 40.5,71.6 38.5, 78 C 36.5,84.4 34.5,90 32.5, 96 C 30.5,102 29.7,104.6 28.5, 108 C 27.3,111.4 26.9,112.2 26.5, 113 C 26.1,113.8 26.5,113.6 26.5, 112 C 26.5,110.4 26.3,107.8 26.5, 105 C 26.7,102.2 26.3,101.2 27.5, 98 C 28.7,94.8 30.1,92.6 32.5, 89 C 34.9,85.4 36.5,83.8 39.5, 80 C 42.5,76.2 45.9,71.8 47.5, 70 C 49.1,68.2 47.9,68.4 47.5, 71 C 47.1,73.6 46.9,78.2 45.5, 83 C 44.1,87.8 42.5,89.4 40.5, 95 C 38.5,100.6 36.9,106.8 35.5, 111 C 34.1,115.2 33.7,115.2 33.5, 116 C 33.3,116.8 33.3,117 34.5, 115 C 35.7,113 36.300000000000004,111.8 39.5, 106 C 42.7,100.2 46.3,93.4 50.5, 86 C 54.7,78.6 57.5,74 60.5, 69 C 63.5,64 64.5,62.8 65.5, 61 C 66.5,59.2 65.5,59 65.5, 60 C 65.5,61 66.3,61.8 65.5, 66 C 64.7,70.2 62.7,75.4 61.5, 81 C 60.3,86.6 60.1,90.4 59.5, 94 C 58.9,97.6 58.7,98.2 58.5, 99 C 58.3,99.8 58.5,98.8 58.5, 98 C 58.5,97.2 56.9,98.2 58.5, 95 C 60.1,91.8 63.5,87 66.5, 82 C 69.5,77 71.3,73.6 73.5, 70 C 75.7,66.4 76.5,65.4 77.5, 64 C 78.5,62.6 78.9,61 78.5, 63 C 78.1,65 78.3,67.6 75.5, 74 C 72.7,80.4 68.7,86.8 64.5, 95 C 60.3,103.2 56.5,111.2 54.5, 115 C 52.5,118.8 52.9,117.2 54.5, 114 C 56.1,110.8 59.5,105 62.5, 99 C 65.5,93 67.10000000000001,88.6 69.5, 84 C 71.9,79.4 73.5,77.8 74.5, 76 C 75.5,74.2 74.5,74.8 74.5, 75 C 74.5,75.2 75.1,74.2 74.5, 77 C 73.9,79.8 72.5,84.6 71.5, 89 C 70.5,93.4 69.9,96.4 69.5, 99 C 69.1,101.6 69.5,101.6 69.5, 102 C 69.5,102.4 68.9,102.2 69.5, 101 C 70.1,99.8 70.5,99 72.5, 96 C 74.5,93 76.7,90.2 79.5, 86 C 82.3,81.8 84.7,77.8 86.5, 75 C 88.3,72.2 88.1,72.8 88.5, 72 C 88.9,71.2 89.1,69.2 88.5, 71 C 87.9,72.8 87.1,76 85.5, 81 C 83.9,86 82.5,89.8 80.5, 96 C 78.5,102.2 76.5,107.4 75.5, 112 C 74.5,116.6 75.5,117.8 75.5, 119 C 75.5,120.2 74.3,120.2 75.5, 118 C 76.7,115.8 78.5,114 81.5, 108 C 84.5,102 87.3,95.4 90.5, 88 C 93.7,80.6 95.7,75.8 97.5, 71 C 99.3,66.2 99.3,62.2 99.5, 64 C 99.7,65.8 98.9,75.8 98.5, 80 C 98.1,84.2 97.9,82.6 97.5, 85 C 97.1,87.4 97.1,88.6 96.5, 92 C 95.9,95.4 94.89999999999999,99 94.5, 102 C 94.1,105 93.9,107 94.5, 107 C 95.1,107 96.7,103.8 97.5, 102 C 98.3,100.2 97.3,101.2 98.5, 98 C 99.7,94.8 101.5,90.6 103.5, 86 C 105.5,81.4 107.1,78.2 108.5, 75 C 109.9,71.8 110.1,69.8 110.5, 70 C 110.9,70.2 111.5,72.2 110.5, 76 C 109.5,79.8 107.3,83.6 105.5, 89 C 103.7,94.4 102.5,99 101.5, 103 C 100.5,107 100.7,108 100.5, 109 C 100.3,110 100.3,108.8 100.5, 108 C 100.7,107.2 100.3,107.6 101.5, 105 C 102.7,102.4 104.5,99 106.5, 95 C 108.5,91 109.9,88 111.5, 85 C 113.1,82 113.7,81 114.5, 80 C 115.3,79 115.5,79.4 115.5, 80 C 115.5,80.6 115.5,79.8 114.5, 83 C 113.5,86.2 112.1,90.8 110.5, 96 C 108.9,101.2 107.3,105.6 106.5, 109 C 105.7,112.4 106.5,112.4 106.5, 113 C 106.5,113.6 104.5,116 106.5, 112 C 108.5,108 114.1,97.4 116.5, 93 C 118.9,88.6 117.5,91.6 118.5, 90 C 119.5,88.4 120.5,86.8 121.5, 85 C 122.5,83.2 123.1,81.4 123.5, 81 C 123.9,80.6 124.1,80.6 123.5, 83 C 122.9,85.4 121.9,88.8 120.5, 93 C 119.1,97.2 117.9,99.8 116.5, 104 C 115.1,108.2 114.3,111.4 113.5, 114 C 112.7,116.6 112.5,116.6 112.5, 117 C 112.5,117.4 111.7,118.2 113.5, 116 C 115.3,113.8 117.7,111.2 121.5, 106 C 125.3,100.8 128.3,96 132.5, 90 C 136.7,84 139.9,80 142.5, 76 C 145.1,72 144.9,71 145.5, 70 C 146.1,69 145.9,69 145.5, 71 C 145.1,73 144.9,75.4 143.5, 80 C 142.1,84.6 140.5,88.2 138.5, 94 C 136.5,99.8 134.7,105 133.5, 109 C 132.3,113 132.5,113.2 132.5, 114 C 132.5,114.8 133.1,113.6 133.5, 113 C 133.9,112.4 133.3,113 134.5, 111 C 135.7,109 137.7,106 139.5, 103 C 141.3,100 141.9,98.6 143.5, 96 C 145.1,93.4 146.3,91.8 147.5, 90 C 148.7,88.2 149.1,87 149.5, 87 C 149.9,87 150.1,87.4 149.5, 90 C 148.9,92.6 148.5,95.4 146.5, 100 C 144.5,104.6 141.7,108.8 139.5, 113 C 137.3,117.2 136.5,119.2 135.5, 121 C 134.5,122.8 133.7,123.2 134.5, 122 C 135.3,120.8 136.1,119.4 139.5, 115 C 142.9,110.6 146.9,106.2 151.5, 100 C 156.1,93.8 159.1,89.2 162.5, 84 C 165.9,78.8 167.1,76.4 168.5, 74 C 169.9,71.6 169.3,72 169.5, 72 C 169.7,72 170.5,71 169.5, 74 C 168.5,77 166.7,81.6 164.5, 87 C 162.3,92.4 160.5,96.2 158.5, 101 C 156.5,105.8 155.3,108.6 154.5, 111 C 153.7,113.4 154.5,112.8 154.5, 113 C 154.5,113.2 153.5,113.4 154.5, 112 C 155.5,110.6 157.1,109.2 159.5, 106 C 161.9,102.8 163.9,100.2 166.5, 96 C 169.1,91.8 171.1,87.2 172.5, 85 C 173.9,82.8 173.3,84.8 173.5, 85 C 173.7,85.2 173.5,85.6 173.5, 86 C 173.5,86.4 174.1,84.8 173.5, 87 C 172.9,89.2 172.1,93 170.5, 97 C 168.9,101 167.1,103.6 165.5, 107 C 163.9,110.4 162.9,112.8 162.5, 114 C 162.1,115.2 162.7,114 163.5, 113 C 164.3,112 165.5,110.6 166.5, 109 C 167.5,107.4 167.5,107 168.5, 105 C 169.5,103 170.3,101.2 171.5, 99 C 172.7,96.8 173.7,95.6 174.5, 94 C 175.3,92.4 175.3,90.4 175.5, 91 C 175.7,91.6 176.1,93.8 175.5, 97 C 174.9,100.2 173.9,102.8 172.5, 107 C 171.1,111.2 169.5,114.8 168.5, 118 C 167.5,121.2 167.5,122 167.5, 123 C 167.5,124 167.1,124.4 168.5, 123 C 169.9,121.6 171.7,119.8 174.5, 116 C 177.3,112.2 179.5,108.8 182.5, 104 C 185.5,99.2 187.5,95.8 189.5, 92 C 191.5,88.2 191.5,86.4 192.5, 85 C 193.5,83.6 194.1,84.8 194.5, 85 C 194.9,85.2 194.5,85.4 194.5, 86 C 194.5,86.6 194.9,86.2 194.5, 88 C 194.1,89.8 193.5,91.4 192.5, 95 C 191.5,98.6 190.7,102.2 189.5, 106 C 188.3,109.8 187.3,112 186.5, 114 C 185.7,116 183.9,117.8 185.5, 116 C 187.1,114.2 191.3,110.2 194.5, 105 C 197.7,99.8 198.1,95.4 201.5, 90 C 204.9,84.6 208.9,81 211.5, 78 C 214.1,75 213.9,73.8 214.5, 75 C 215.1,76.2 214.7,81.6 214.5, 84 C 214.3,86.4 214.1,84.6 213.5, 87 C 212.9,89.4 212.5,92 211.5, 96 C 210.5,100 210.1,102.2 208.5, 107 C 206.9,111.8 204.9,116.6 203.5, 120 C 202.1,123.4 201.7,123.4 201.5, 124 C 201.3,124.6 201.5,124.4 202.5, 123 C 203.5,121.6 204.5,120.4 206.5, 117 C 208.5,113.6 210.1,110.2 212.5, 106 C 214.9,101.8 216.3,99.6 218.5, 96 C 220.7,92.4 222.1,90.2 223.5, 88 C 224.9,85.8 225.1,85.4 225.5, 85 C 225.9,84.6 225.5,84.4 225.5, 86 C 225.5,87.6 226.5,89 225.5, 93 C 224.5,97 222.1,101 220.5, 106 C 218.9,111 218.5,114.4 217.5, 118 C 216.5,121.6 215.9,122.6 215.5, 124 C 215.1,125.4 215.5,125 215.5, 125 C 215.5,125 214.5,125.6 215.5, 124 C 216.5,122.4 217.5,120.8 220.5, 117 C 223.5,113.2 226.5,109.6 230.5, 105 C 234.5,100.4 237.3,97.8 240.5, 94 C 243.7,90.2 244.9,88 246.5, 86 C 248.1,84 248.5,82.8 248.5, 84 C 248.5,85.2 249.7,84.2 246.5, 92 C 243.3,99.8 235.3,116.4 232.5, 123 C 229.7,129.6 232.5,124.8 232.5, 125 C 232.5,125.2 232.3,124.8 232.5, 124 C 232.7,123.2 232.3,123.6 233.5, 121 C 234.7,118.4 236.5,115.6 238.5, 111 C 240.5,106.4 241.9,102 243.5, 98 C 245.1,94 245.5,93 246.5, 91 C 247.5,89 248.1,88.8 248.5, 88 C 248.9,87.2 248.5,87 248.5, 87 C 248.5,87 248.5,86.2 248.5, 88 C 248.5,89.8 249.1,92 248.5, 96 C 247.9,100 246.9,103.8 245.5, 108 C 244.1,112.2 242.7,114.2 241.5, 117 C 240.3,119.8 239.7,121.2 239.5, 122 C 239.3,122.8 239.3,122.6 240.5, 121 C 241.7,119.4 242.7,118.4 245.5, 114 C 248.3,109.6 251.3,104.8 254.5, 99 C 257.7,93.2 259.5,89.4 261.5, 85 C 263.5,80.6 263.7,78.8 264.5, 77 C 265.3,75.2 265.3,76 265.5, 76 C 265.7,76 265.5,75.6 265.5, 77 C 265.5,78.4 266.5,77.2 265.5, 83 C 264.5,88.8 261.7,100.6 260.5, 106 C 259.3,111.4 259.9,108.8 259.5, 110 C 259.1,111.2 258.9,110.8 258.5, 112 C 258.1,113.2 257.7,115.8 257.5, 116 C 257.3,116.2 256.9,115.2 257.5, 113 C 258.1,110.8 259.1,108.4 260.5, 105 C 261.9,101.6 263.3,98.6 264.5, 96 C 265.7,93.4 266.1,93 266.5, 92 C 266.9,91 266.5,91 266.5, 91 C 266.5,91 266.7,90.4 266.5, 92 C 266.3,93.6 266.1,95.8 265.5, 99 C 264.9,102.2 264.3,104.6 263.5, 108 C 262.7,111.4 261.9,114 261.5, 116 C 261.1,118 261.3,117.8 261.5, 118 C 261.7,118.2 261.3,119.6 262.5, 117 C 263.7,114.4 265.3,110.2 267.5, 105 C 269.7,99.8 271.7,96 273.5, 91 C 275.3,86 275.7,83.2 276.5, 80 C 277.3,76.8 277.3,75.8 277.5, 75"
            />
        </svg>
    );
}
