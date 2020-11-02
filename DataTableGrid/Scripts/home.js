$(document).ready(function () {
   var tabela = $('#tabela').DataTable({
        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-control form-control-sm" style="width: 100%;"><option value=""></option></select>')
                    .prependTo($(column.header()))
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
            });
        },
        "scrollY": "50vh",
        "paging": false,
        "ordering": false,
       "sDom": "t",
       "columnDefs": [{ targets: '0', width: '7%' },
           { targets: '1', width: '7%' },
           { targets: '2', width: '7%' },
           { targets: '3', width: '7%' },
           { targets: '4', width: '7%' },
           { targets: '5', width: '7%' },
           { targets: '6', width: '5%' },
           { targets: '7', width: '25%' },
           { targets: '8', width: '8.9%' },
           { targets: '9', width: '5%' },
           { targets: '10', width: '25%' },
           { targets: '11', width: '7%' },
           { targets: '12', width: '7%' },
           { targets: '13', width: '8.9%' }]
   });

    tabela.columns.adjust();
});