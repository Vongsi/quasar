export default {
  isoName: 'lo',
  nativeName: 'ພາສາລາວ',
  label: {
    clear: 'ລ້າງ',
    ok: 'ຕົກລົງ',
    cancel: 'ຍົກເລິກ',
    close: 'ປິດ',
    set: 'ຕັ້ງຄ່າ',
    select: 'ເລືອກ',
    reset: 'ຕັ້ງໃໝ່',
    remove: 'ລົບ',
    update: 'ປັບປຸງ',
    create: 'ສ້າງ',
    search: 'ຊອກຫາ',
    filter: 'ຕອງ',
    refresh: 'ຣິເຟຣຊ'
  },
  date: {
    days: 'ວັນອາທິດ_ວັນຈັນ_ວັນອັງຄານ_ວັນພຸດ_ວັນພະຫັດ_ວັນສຸກ_ວັນເສົາ'.split('_'),
    daysShort: 'ອທ_ຈ_ອ_ພ_ພຫ_ສກ_ສ'.split('_'),
    months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພືດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນຫວາ'.split(
      '_'
    ),
    monthsShort: 'ດ1_ດ2_ດ3_ດ4_ດ5_ດ6_ດ7_ດ8_ດ9_ດ10_ດ11_ດ12'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'ວັນ'
  },
  table: {
    noData: 'ບໍ່ມີຂໍ້ມູນ',
    noResults: 'ບໍ່ມີຜົນຮັບ',
    loading: 'ກຳລັງໂຫລດ...',
    selectedRecords: function(rows) {
      return rows > 0
        ? 'ເລືອກທັງໝົດ ' + rows + ' ແຖວ'
        : 'ບໍ່ມີແຖວໃດທີ່ຖືກເລືອກ';
    },
    recordsPerPage: 'ແຖວຕໍ່ໜ້າ:',
    allRows: 'ແຖວທັງໝົດ',
    pagination: function(start, end, total) {
      return start + '-' + end + ' ຂອງ ' + total;
    },
    columns: 'ຖານ'
  },
  editor: {
    url: 'URL',
    bold: 'ຕົວໜາ',
    italic: 'ຕົວອ່ຽງ',
    strikethrough: 'ເສັ້ນຂິດຂ້າ',
    underline: 'ເສັ້ນຂິດກ້ອງ',
    unorderedList: 'ລາຍການ',
    orderedList: 'ລຳດັບລາຍການ',
    subscript: 'ຕົວຫ້ອຍ',
    superscript: 'ຕົວຍົກ',
    hyperlink: 'ໄຮເປີລິງຄ',
    toggleFullscreen: 'ສະລັບເຕັມຈໍ',
    quote: 'ອ້າງອີງ',
    left: 'ຊ້າຍ',
    center: 'ກາງ',
    right: 'ຂວາ',
    justify: 'ຂອບ',
    print: 'ພິມທ',
    outdent: 'ລຸດຫຍໍ້ໜ້າ',
    indent: 'ເພີ່ມຫຍໍ້ໜ້າ',
    removeFormat: 'ລ້າງຮູບແບບ',
    formatting: 'ຈັດຮູບແບບ',
    fontSize: 'ຂະໜາດອັກສອກ',
    align: 'ແນວ',
    hr: 'ເສັ້ນຂວາງ',
    undo: 'ຍົກເລິກ',
    redo: 'ເຮັດຊຳ້',
    heading1: 'ຫົວຂໍ້ 1',
    heading2: 'ຫົວຂໍ້  2',
    heading3: 'ຫົວຂໍ້  3',
    heading4: 'ຫົວຂໍ້  4',
    heading5: 'ຫົວຂໍ້  5',
    heading6: 'ຫົວຂໍ້  6',
    paragraph: 'ຫຍໍ້ໜ້າ',
    code: 'ໂຄດ',
    size1: 'ນ້ອຍຫລາຍ',
    size2: 'ນ້ອຍ',
    size3: 'ທຳມະດາ',
    size4: 'ໃຫຍ່ກ່ວາປົກກະຕິ',
    size5: 'ໃຫຍ່',
    size6: 'ໃຫຍ່ຫລາຍ',
    size7: 'ໃຫຍ່ທີ່ສຸດ',
    defaultFont: 'ຟອນມາດຕະຖານ',
    viewSource: 'ເບີ່ງທີ່ມາ'
  },
  tree: {
    noNodes: 'ບໍ່ມີໂຫນດ',
    noResults: 'ບໍ່ເຫັນໂຫນດທີ່ລະບຸ'
  }
};
