export interface MarathiCharacter {
  char: string;
  transliteration: string;
  example: string;
  image: string;
  colorClass: string;
}

export const swar: MarathiCharacter[] = [
  { char: 'अ', transliteration: 'a', example: 'अननस', image: 'https://images.unsplash.com/photo-1550506389-e9977585fdd6?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'आ', transliteration: 'ā', example: 'आंबा', image: 'https://images.unsplash.com/photo-1553334820-552ee64ad6bb?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'इ', transliteration: 'i', example: 'इमारत', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'ई', transliteration: 'ī', example: 'इडलिंबू', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'उ', transliteration: 'u', example: 'उखळ', image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'ऊ', transliteration: 'ū', example: 'ऊस', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#14b8a6]' },
  { char: 'ऋ', transliteration: 'ṛ', example: 'ऋषी', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'ए', transliteration: 'e', example: 'एडका', image: 'https://images.unsplash.com/photo-1484557918186-75602110c3d2?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'ऐ', transliteration: 'ai', example: 'ऐरण', image: 'https://images.unsplash.com/photo-1599427303058-f16cb9f98a44?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ec4899]' },
  { char: 'ओ', transliteration: 'o', example: 'ओझे', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'औ', transliteration: 'au', example: 'औषध', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ec4899]' },
  { char: 'अं', transliteration: 'am', example: 'अंगठी', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'अः', transliteration: 'ah', example: 'स्वतः', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#4f46e5]' },
];

export const vyanjan: MarathiCharacter[] = [
  { char: 'क', transliteration: 'ka', example: 'कमळ', image: 'https://images.unsplash.com/photo-1623916942698-335133614917?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#4f46e5]' },
  { char: 'ख', transliteration: 'kha', example: 'खडू', image: 'https://images.unsplash.com/photo-1623143522718-4a9291f09d7d?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#22c55e]' },
  { char: 'ग', transliteration: 'ga', example: 'गवत', image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'घ', transliteration: 'gha', example: 'घर', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'ङ', transliteration: 'nga', example: 'वाङ्मय', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'च', transliteration: 'cha', example: 'चमचा', image: 'https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ec4899]' },
  { char: 'छ', transliteration: 'chha', example: 'छत्री', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'ज', transliteration: 'ja', example: 'जहाज', image: 'https://images.unsplash.com/photo-1544551763-47a184119879?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'झ', transliteration: 'jha', example: 'झबले', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'ञ', transliteration: 'nya', example: 'चञ्चु', image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'ट', transliteration: 'ṭa', example: 'टपाल', image: 'https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'ठ', transliteration: 'ṭha', example: 'ठसा', image: 'https://images.unsplash.com/photo-1590011502422-959666060c57?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#22c55e]' },
  { char: 'ड', transliteration: 'ḍa', example: 'डबा', image: 'https://images.unsplash.com/photo-1536323760109-ca8c07450053?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'ढ', transliteration: 'ḍha', example: 'ढग', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'ण', transliteration: 'ṇa', example: 'बाण', image: 'https://images.unsplash.com/photo-1601625463687-25541fb72f67?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'त', transliteration: 'ta', example: 'तलवार', image: 'https://images.unsplash.com/photo-1589703530050-488667825b41?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'थ', transliteration: 'tha', example: 'थवा', image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#22c55e]' },
  { char: 'द', transliteration: 'da', example: 'दप्तर', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'ध', transliteration: 'dha', example: 'धनुष्य', image: 'https://images.unsplash.com/photo-1601625463687-25541fb72f67?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'न', transliteration: 'na', example: 'नळ', image: 'https://images.unsplash.com/photo-1585333120111-3729e2034934?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'प', transliteration: 'pa', example: 'पतंग', image: 'https://images.unsplash.com/photo-1502446702621-032247161b36?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'फ', transliteration: 'pha', example: 'फणस', image: 'https://images.unsplash.com/photo-1596541530931-f1f33580575d?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'ब', transliteration: 'ba', example: 'बदक', image: 'https://images.unsplash.com/photo-1465153690352-10c1f2953793?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'भ', transliteration: 'bha', example: 'भटजी', image: 'https://images.unsplash.com/photo-1516283231484-7de097321ec9?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ec4899]' },
  { char: 'म', transliteration: 'ma', example: 'मगर', image: 'https://images.unsplash.com/photo-1549240923-93a2e080e653?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#22c55e]' },
  { char: 'य', transliteration: 'ya', example: 'यज्ञ', image: 'https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'र', transliteration: 'ra', example: 'रथ', image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'ल', transliteration: 'la', example: 'लसूण', image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
  { char: 'व', transliteration: 'va', example: 'वजन', image: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#f97316]' },
  { char: 'श', transliteration: 'sha', example: 'शहामृग', image: 'https://images.unsplash.com/photo-1574868991734-f8609cc36463?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'ष', transliteration: 'sha', example: 'षटकोन', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#a855f7]' },
  { char: 'स', transliteration: 'sa', example: 'ससा', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ec4899]' },
  { char: 'ह', transliteration: 'ha', example: 'हत्ती', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#22c55e]' },
  { char: 'ळ', transliteration: 'la', example: 'बाळ', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#3b82f6]' },
  { char: 'क्ष', transliteration: 'ksha', example: 'क्षत्रिय', image: 'https://images.unsplash.com/photo-1589703530050-488667825b41?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#eab308]' },
  { char: 'ज्ञ', transliteration: 'dnya', example: 'ज्ञानेश्वर', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop', colorClass: 'bg-[#ef4444]' },
];
