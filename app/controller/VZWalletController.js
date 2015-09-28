/**
 * 
 */
Ext.define('wallet.controller.VZWalletController',{
	extend: 'Ext.app.Controller',
	views: ['LoginView', 'DecisionView', 'CashView','AddPayeeView', 'BillPayView', 'LoyaltyView'],
	refs:[{
		ref: 'loginview',
		selector: 'loginview'
		
	},{
		ref: 'decisionview',
		selector: 'decisionview'
		
	},{
		ref: 'cashview',
		selector: 'cashview'
		
	},{
		ref: 'addpayeeview',
		selector: 'addpayeeview'
		
	},{
		ref: 'billpayview',
		selector: 'billpayview'
		
	},{
		ref: 'loyaltyview',
		selector: 'loyaltyview'
		
	}],
	init: function() {
		this.control({
			'textfield[itemId=mdnText]': {
				'change': function(field, newVal, oldVal) {
					//this.getLoginview().down('[itemId=okBtn]').setDisabled(Ext.isEmpty(newVal));
					if (!Ext.isEmpty(newVal) && newVal.length === 10 ) {
						var existingUser = false, newUser = true;
						if (existingUser) {
							field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Login');
						} else if ( newUser ) {
							field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=rePinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Register');
						}
						/*Ext.Ajax.request({
							url: '',
							params: {},
							success: function(response) {
									
							},
							failure: function() {
								var existingUser = true, newUser = false;
								if (existingUser) {
									field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Login');
								} else if ( newUser ) {
									field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=rePinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Register');
								}
							}
						});*/
					}
				}
			},
			'button[itemId=okBtn]': {
				'click': function(btn) {
					this.hideAllViews();
					this.getDecisionview().show();
				}			
			},
			'decisionview': {
				'afterrender': function(view) {
					Ext.get('loadCash').on('click', function() {
						this.hideAllViews();
						this.getCashview().show();
						this.getCashview().down('[itemId=cashPanel]').getForm().reset();
						Ext.iterate(this.getCashview().down('[itemId=cashPanel]').query('container[defaultShow=false]'), function(cnt) {
							cnt.hide();
						});
					}, this);
					Ext.get('billPay').on('click', function() {
						this.hideAllViews();
						this.getBillpayview().down('[itemId=billPayPanel]').getForm().reset();
						this.getBillpayview().down('[itemId=toPayeeCnt]').hide();						
						this.getBillpayview().down('[itemId=toBillCnt]').hide();						
						this.getBillpayview().show();
					}, this);
					Ext.get('loyalty').on('click', function() {
						this.hideAllViews();
						this.getLoyaltyview().down('[itemId=loyaltyPanel]').getForm().reset();
						this.getLoyaltyview().show();
					}, this);
				}
			},
			'button[itemId=cashGoBack]': {
				'click': function(){
					this.hideAllViews();
					this.getDecisionview().show();
				}
			},
			'cashview radiofield': {
				'change': function(field, newVal, oldVal) {
					if (newVal) {
						this.hideAllPayments();
						if (field.itemId === 'creditRadio') {
							this.getCashview().down('[itemId=creditCardCnt]').show();
						} else if (field.itemId === 'debitRadio') {
							this.getCashview().down('[itemId=debitCardCnt]').show();
						} else if (field.itemId === 'netBankingRadio') {
							this.getCashview().down('[itemId=netBankingCnt]').show();
						}
					}
					
				}				
			},
			'cashview': {
				'afterrender': function(view) {
					Ext.get('addPayee').on('click', function() {
						this.hideAllViews();
						this.getAddpayeeview().down('[itemId=addPayeePanel]').getForm().reset();
						this.getAddpayeeview().show();
					}, this);
					
				}
			},
			'addpayeeview button[itemId=payeeGoBack]': {
				'click': function(btn) {
					this.hideAllViews();
					this.getDecisionview().show();
				}
			},
			'addpayeeview combo[itemId=typeOfBillers]': {
				'select': function(combo, value) {
					var sectorStore = combo.up('addpayeeview').down('[itemId=sectors]').getStore();
					var sectorCombo = combo.up('addpayeeview').down('[itemId=sectors]');
					var value = combo.getValue();
					if (value === 'Insurance') {
						sectorStore.loadRawData([
						{
							'valueField': 'Athena',
							'displayField': 'Athena'
						}]);
						sectorCombo.setValue('Athena');
					} else if (value === 'Electricity') {
						sectorStore.loadRawData([{
							'valueField': 'E.B',
							'displayField': 'E.B'
						}]);
						sectorCombo.setValue('E.B');
					} else if (value === 'Telephone') {
						sectorStore.loadRawData([{
							'valueField': 'Verizon',
							'displayField': 'Verizon'
						},
						{
							'valueField': 'Verizon FIOS',
							'displayField': 'Verizon FIOS'
						},{
							'valueField': 'AT&T',
							'displayField': 'AT&T'
						},{
							'valueField': 'T-Mobile',
							'displayField': 'T-Mobile'
						},{
							'valueField': 'Sprint',
							'displayField': 'Sprint'
						}]);
						sectorCombo.setValue('Verizon');
					}
				}
			},
			'billpayview button[itemId=billGoBack]': {
				'click': function(btn) {
					var me = this;
					this.hideAllViews();
					this.getDecisionview().show();
				}
			},
			'billpayview radiofield': {
				'change': function(field, newVal, oldVal) {
					if (newVal) {
						this.hideAllBillPayments();
						if (field.itemId === 'payeeRadio') {
							this.getBillpayview().down('[itemId=toPayeeCnt]').show();
						} else if (field.itemId === 'billerRadio') {
							this.getBillpayview().down('[itemId=toBillCnt]').show();
						}
					}
					
				}
			},
			'loyaltyview button[itemId=loyaltyGoBack]': {
				'click': function(view) {
					this.hideAllViews();
					this.getDecisionview().show();
				}
			}
		});
	},
	hideAllViews: function() {
		this.getLoginview().hide();
		this.getDecisionview().hide();
		this.getAddpayeeview().hide();
		this.getCashview().hide();
		this.getBillpayview().hide();
		this.getLoyaltyview().hide();
	},
	hideAllPayments: function() {
		this.getCashview().down('[itemId=creditCardCnt]').hide();
		this.getCashview().down('[itemId=debitCardCnt]').hide();
		this.getCashview().down('[itemId=netBankingCnt]').hide();
	},
	hideAllBillPayments: function() {
		this.getBillpayview().down('[itemId=toPayeeCnt]').hide();
		this.getBillpayview().down('[itemId=toBillCnt]').hide();
	}
});
