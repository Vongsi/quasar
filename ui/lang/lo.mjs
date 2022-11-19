export default {
  isoName: 'lo',
  nativeName: 'ລາວ',
  label: {
    clear: 'ລ້າງ',
    ok: 'ຕົກລົງ',
    cancel: 'ຍົກເລິກ',
    close: 'ປິດ',
    set: 'ຕັ້ງຄ່າ',
    select: 'ເລືຶອກ',
    reset: 'ຕັ້ງໃໝ່',
    remove: 'ລົບ',
    update: 'ປັບປຸງ',
    create: 'ສ້າງ',
    search: 'ຄົ້ນຫາ',
    filter: 'ກັ່ງຕອງ',
    refresh: 'ຣິເຟຣສ',
    expand: label => (label ? `ຂະຫຍາຍ "${ label }"` : 'ຂະຫຍາຍ'),
    collapse: label => (label ? `ຍຸບ "${ label }"` : 'ຍຸບ')
  },
  date: {
    days: 'ອາທິດ_ຈັນ_ອັງຄານ_ພູດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    daysShort: 'ອາ._ຈ._ອ._ພ._ພຫ._ສ._ສ.'.split('_'),
    months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort: 'ມກ._ກພ._ມນ._ມສ._ພພ._ມຖ._ກກ._ສຫ._ກຍ._ຕລ._ພຈ._ທວ.'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    pluralDay: 'ວັນ'
  },
  table: {
    noData: 'ບໍ່ມີຂໍ້ມູນ',
    noResults: 'ບໍ່ມີຜົນຮັບ',
    loading: 'ກຳລັງໂລດ...',
    selectedRecords: rows => (
      rows > 0
        ? 'ເລືອກທັງໝົດ ' + rows + ' ແຖວ'
        : 'ບໍ່ມີແຖວຖຶກເລືອກ'
    ),
    recordsPerPage: 'ແຖວຕໍ່ໜ້າ:',
    allRows: 'ແຖວທັງໝົດ',
    pagination: (start, end, total) => start + '-' + end + ' ຂອງ ' + total,
    columns: 'ຖານ'
  },
  editor: {
    url: 'URL',
    bold: 'ຕົວໜາ',
    italic: 'ຕົວອຽງ',
    strikethrough: 'ເສັ້ນຄິດກາງ',
    underline: 'ເສັ້ນຄິດກ້ອງ',
    unorderedList: 'ລາຍການບໍ່ລຽນລຳດັບ',
    orderedList: 'ລາຍການເປັນລຳດັບ',
    subscript: 'ຕົວຫ້ອຍ',
    superscript: 'ຕົວຍົນ',
    hyperlink: 'ໄຮເບິລິ້ງ',
    toggleFullscreen: 'ເປິດເຕັມຈໍ',
    quote: 'ອ້າງອິງ',
    left: 'ຊ້າຍ',
    center: 'ກາງ',
    right: 'ຂວາ',
    justify: 'ສະເໝີ',
    print: 'ພິມ',
    outdent: 'ລຸດຍໍ້ໜ້າ',
    indent: 'ເພີ່ມຍໍ້ໜັ້າ',
    removeFormat: 'ລ້າງຮູບແບບ',
    formatting: 'ຈັດຮູບແບບ',
    fontSize: 'ຂະໜາດຕົວອັກສອນ',
    align: 'ແນວ',
    hr: 'ເພີ່ມແຖວຂວາງ',
    undo: 'ຍົກເລິກ',
    redo: 'ເຮັດຊ້ຳ',
    heading1: 'ຫົວຂໍ້ 1',
    heading2: 'ຫົວຂໍ້ 2',
    heading3: 'ຫົວຂໍ້ 3',
    heading4: 'ຫົວຂໍ້ 4',
    heading5: 'ຫົວຂໍ້ 5',
    heading6: 'ຫົວຂໍ້ 6',
    paragraph: 'ຍໍ້ໜ້າ',
    code: 'ໂຄດ',
    size1: 'ນ້ອຍຫຼາຍ',
    size2: 'ນອ້ຍ',
    size3: 'ປົກກະຕິ',
    size4: 'ໃຫຍ່ກ່ວາປົກກະຕິ',
    size5: 'ໃຫຍ່',
    size6: 'ໃຫຍ່ຫຼາຍ',
    size7: 'ໃຫຍ່ທີ່ສຸດ',
    defaultFont: 'ຟອນຕັ້ງຕົ້ນ',
    viewSource: 'ເບີ່ງໂຄດ'
  },
  tree: {
    noNodes: 'ບໍ່ມີໂໜດ',
    noResults: 'ບໍ່ມີໂໜດທີ່ຊອກ'
  }
}
