function DeleteOldEmail () {
	var threads;
	var thread;

	threads = GmailApp.search("older_than:90d");
	for(var i = 0; i < threads.length; i++)
	{
		var thread = messages[i];
		GmailApp.moveThreadToTrash(thread);
	}
}
