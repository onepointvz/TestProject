Ext.application({
	name: 'wallet',
	appFolder: 'res/scripts/app',
	requires: ['wallet.view.LoginView', 'wallet.view.DecisionView', 'wallet.view.CashView', 'wallet.view.AddPayeeView', 'wallet.view.BillPayView', 'wallet.view.LoyaltyView'],
	controllers: ['VZWalletController'],
	launch: function() {
		Ext.create('Ext.container.Viewport',{
			renderTo: Ext.getBody(),
			id: 'viewport',
			itemId: 'viewport',
			layout: 'fit',
			items:[{
				xtype: 'loginview',
				itemId: 'loginview'
			},
			{
				xtype: 'decisionview',
				hidden: true
			},{
				xtype: 'cashview',
				hidden: true
			},{
				xtype: 'addpayeeview',
				hidden: true
			},{
				xtype: 'billpayview',
				hidden: true
			},{
				xtype: 'loyaltyview',
				hidden: true
			}]
		});
	}
});