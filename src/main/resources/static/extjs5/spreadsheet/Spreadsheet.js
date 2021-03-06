Ext.define('Spreadsheet', {
    extend: 'Ext.grid.Panel',

    controller: {
    	xclass: 'SpreadsheetController'
    },

	viewModel: {
		xclass: 'SpreadsheetModel'
	},    
    
    bind: {
    	store: '{monthlySales}'
    },
    
    columnLines: true,
    height: 400,
    width: 750,
    title: 'Spreadsheet',
    frame: true,
    resizable: true,

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        //checkboxSelect: true,
        pruneRemoved: false
    },

    // Enable CTRL+C/X/V hot-keys to copy/cut/paste to the system clipboard.
    plugins: 'clipboard',

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    tools: [{
        type: 'refresh',
        handler: 'onRefresh',
        tooltip: 'Reload Data'
    }],

    tbar: [{
        xtype: 'component',
        html: 'Selectable: '
    }, {
        text: 'Rows',
        enableToggle: true,
        toggleHandler: 'toggleRowSelect',
        pressed: true
    }, {
        text: 'Cells',
        enableToggle: true,
        toggleHandler: 'toggleCellSelect',
        pressed: true
    }, {
        text: 'Columns',
        enableToggle: true,
        toggleHandler: 'toggleColumnSelect',
        pressed: true
    }, '->', {
        xtype: 'component',
        reference: 'status'
    }],

    columns:[
        { text: 'Year', dataIndex: 'year', flex: 1, minWidth: 70 },
        { text: 'Jan',  dataIndex: 'jan', width: 50 },
        { text: 'Feb',  dataIndex: 'feb', width: 50 },
        { text: 'Mar',  dataIndex: 'mar', width: 50 },
        { text: 'Apr',  dataIndex: 'apr', width: 50 },
        { text: 'May',  dataIndex: 'may', width: 50 },
        { text: 'Jun',  dataIndex: 'jun', width: 50 },
        { text: 'Jul',  dataIndex: 'jul', width: 50 },
        { text: 'Aug',  dataIndex: 'aug', width: 50 },
        { text: 'Sep',  dataIndex: 'sep', width: 50 },
        { text: 'Oct',  dataIndex: 'oct', width: 50 },
        { text: 'Nov',  dataIndex: 'nov', width: 50 },
        { text: 'Dec',  dataIndex: 'dec', width: 50 }
    ],

    viewConfig: {
        columnLines: true,
        trackOver: false
    }
});
