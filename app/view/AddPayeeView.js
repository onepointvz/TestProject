/**
 * 
 */
Ext.define('wallet.view.AddPayeeView',{
	alias: 'widget.addpayeeview',
	extend: 'Ext.container.Container',
	layout: {
		type: 'hbox',
		pack: 'center',
		align: 'middle'
	},
	style: 'background-color: #FFFFFF;background: url(res/images/Verizon_Logo.jpg)',
	items:[{
		xtype: 'form',
		itemId: 'addPayeePanel',
		title: '<div class="redFont">Register Payee</div>',
		width: '75%',
		autoScroll: true,
		height: '85%',
		bodyPadding: 5,
		dockedItems:[{
			xtype: 'toolbar',
			dock: 'top',
			style: 'background-color:#cd040c;',
			padding: 0,
			items:[{
				xtype: 'container',
				width: '100%',
				layout: {
					type: 'hbox',
					pack: 'center',
					align: 'middle'
				},
				items:[{
					xtype: 'displayfield',
					labelSeparator: '',
					type: 'nameField',
					labelWidth: 15,
					fieldLabel: 'Hi,',
					fieldCls: 'whiteLabelBold',
					labelCls: 'whiteLabel paddingRight',
					value: 'Anthoni'
				}]
			}]
		}],
		tools: [{
			type: 'mytool',
			width: 'auto',
			renderTpl: [
				'<img id="" src="res/images/Logout.png" role="presentation" height="15" width="15"/>'
			],
			handler: function() {
				window.location.href = 'index.jsp';
			}
		}],
		layout: {
			type: 'vbox',
			pack: 'center',
			align: 'middle'
		},
		items: [{
				xtype: 'container',
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'textfield',
					fieldLabel: 'Nick Name'
					

				}]
			},{
				xtype: 'container',
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'textfield',
					maskRe: /^[0-9\b]+$/,
					fieldLabel: 'MDN'
				}]
			},{
				xtype: 'container',
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'fieldcontainer',
					layout: 'hbox',
					defaults: {
						padding: '0 10 0 0',
					},
					items:[{
						xtype: 'combobox',
						fieldLabel: 'Type Of Billers',
						itemId: 'typeOfBillers',
						queryMode: 'local',
						store: ['Insurance','Electricity','Telephone'],
						value: 'Insurance'
					},{
						xtype: 'combobox',
						queryMode: 'local',
						itemId: 'sectors',
						store: new Ext.data.Store({
							fields: ['displayField', 'valueField'],
							data:[{
								'displayField': 'Athena',
								'valueField': 'Athena'
							}]
						}),
						displayField: 'displayField',
						valueField: 'valueField',
						value: 'Athena'
					}]
				}]
			},{
				xtype: 'tbspacer',
				height: 20
			},{
				xtype: 'container',
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'fieldcontainer',
					defaultType: 'checkboxfield',
					layout: 'hbox',
					items:[{
						boxLabel: 'Auto Pay'
					}]
				}]
			},{
				xtype: 'container',
				width: '100%',
				layout: {
					type: 'hbox',
					pack: 'center',
					align: 'middle'
				},
				items: [{
					xtype: 'button',
					width: '20%',
					itemId: 'payeeGoBack',
					text: 'Back'
				},{
					xtype: 'tbspacer',
					width: '10%'
				},{
					xtype: 'button',
					width: '20%',
					text: 'Submit'
				}]
			}]
	}]
});