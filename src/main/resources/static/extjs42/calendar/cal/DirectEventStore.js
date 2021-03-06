Ext.define('Cal.DirectEventStore', {
    extend: 'Ext.data.Store',
    model: 'Extensible.calendar.data.EventModel',
    deferLoad: true,
    
    proxy: {
		type: 'direct',
	    api: {
	        read: calendarService.read,
	        create: calendarService.create,
	        update: calendarService.update,
	        destroy: calendarService.destroy
	    }		
	}

});