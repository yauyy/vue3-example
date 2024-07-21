import { strToU8, zipSync, Gzip, strFromU8, gzip, zip } from 'fflate';

export function save(blob: Blob, filename: string) {
  const link = document.createElement('a');
  if (link.href) {
    URL.revokeObjectURL(link.href);
  }

  link.href = URL.createObjectURL(blob);
  link.download = filename || 'data.json';
  link.dispatchEvent(new MouseEvent('click'));
}

export const handleZipSync = () => {
  const str = '你好哇哇';
  const zipped = zipSync({
    // 文件夹
    dir1: {
      // 嵌套文件夹
      nested: {
        // 文件
        '你好.txt': strToU8(str),
      },
    },
    // 文件夹
    dir2: {
      '测试.txt': strToU8('hello'),
    },
    // 文件
    'test.js': strToU8("console.log('hello')"),
  });

  const blob = new Blob([zipped.buffer], { type: 'application/zip' });
  save(blob, 'data.zip');
};

export const handleZipSyncImg = async () => {
  const img = 'https://table-file.xironiot.com/files/1717381504049428608_exZwQgkZQEjy8f1270a16a07b5f11c28b36236a11a0f.jpg';
  const res = await fetch(img).then((res) => res.arrayBuffer());

  const compressed = new Uint8Array(res);

  const zipped = zipSync({
    // 文件夹
    img: {
      // 文件
      'test.jpg': compressed,
    },
  });

  const blob = new Blob([zipped.buffer], { type: 'application/zip' });
  save(blob, 'data.zip');
};

export const hangleZip = async () => {
  const videos = [
    'https://table-file.xironiot.com/files/1716896421846231767_FZogLqWmN7JD401484da90bb2bdddec851169672963a.mp4',
    'https://table-file.xironiot.com/files/1717381653226217555_cx2bomjku3B9110c17d3a022b99825e892938f2f00ea.mp4',
    'https://table-file.xironiot.com/files/1717381670896566896_Wv4iMf3LoXP6110c17d3a022b99825e892938f2f00ea.mp4',
  ];
  const imgs = [
    'https://table-file.xironiot.com/cos_files/1721292568827727038_tmp_ec33c15b3588426b82e069f23f7f954c75c98b3a0911d05f.jpg',
    'https://table-file.xironiot.com/cos_files/1721468188063265524_tmp_369172e0f13fd56e3421dbd88db943a507315a329edb807a.jpg',
    'https://table-file.xironiot.com/cos_files/1721292586712580597_tmp_a820df6171dbba7ce2cb849e3f737256f220734c9d7f5181.jpg',
  ];
  const img = 'https://table-file.xironiot.com/files/1717381504049428608_exZwQgkZQEjy8f1270a16a07b5f11c28b36236a11a0f.jpg';
  const files = reactive<any>({});
  watch(
    () => files,
    (newVal) => {
      console.log('watch', newVal, newVal.length, imgs.length);

      if (Object.keys(newVal).length === imgs.length + videos.length) {
        const zipped = zipSync(toRaw(newVal));
        console.log('🚀 ~ hangleZip ~ zipped:', zipped);
        const blob = new Blob([zipped.buffer], { type: 'application/zip' });
        save(blob, 'data.zip');
      }
    },
    {
      deep: true,
    },
  );

  const ext = (img: string) => img.split('_').pop()?.split('.').pop();
  [...imgs, ...videos].forEach((img, index) => {
    fetch(img)
      .then((res) => res.arrayBuffer())
      .then((res) => {
        console.log(index, 'index');

        const uint8Array = new Uint8Array(res);
        files[`${index}.${ext(img)}`] = uint8Array;
        console.log(files, 'files.value');
      });
  });
};
